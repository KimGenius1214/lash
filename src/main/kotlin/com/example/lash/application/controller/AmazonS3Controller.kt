package com.example.lash.application.controller

import com.example.lash.domain.service.AwsS3Service
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile


@RestController
@RequiredArgsConstructor
@RequestMapping("/s3")
class AmazonS3Controller(
    private val awsS3Service: AwsS3Service
) {

    /**
     * Amazon S3에 파일 업로드
     * @return 성공 시 200 Success와 함께 업로드 된 파일의 파일명 리스트 반환
     */
    @ApiOperation(value = "Amazon S3에 파일 업로드", notes = "Amazon S3에 파일 업로드 ")
    @PostMapping("/file")
    fun uploadFile(
        @ApiParam(
            value = "파일들(여러 파일 업로드 가능)",
            required = true
        ) @RequestPart multipartFile: List<MultipartFile>
    ): List<String> {
        return awsS3Service.uploadImage(multipartFile)
    }

    /**
     * Amazon S3에 업로드 된 파일을 삭제
     * @return 성공 시 200 Success
     */
    @ApiOperation(value = "Amazon S3에 업로드 된 파일을 삭제", notes = "Amazon S3에 업로드된 파일 삭제")
    @DeleteMapping("/file")
    fun deleteFile(
        @ApiParam(
            value = "파일 하나 삭제"
        ) @RequestParam fileName: String
    ): ResponseEntity<Void>? {
        awsS3Service.deleteImage(fileName)
        return null
    }
}