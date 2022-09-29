package com.example.lash.domain.service

import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.model.CannedAccessControlList
import com.amazonaws.services.s3.model.DeleteObjectRequest
import com.amazonaws.services.s3.model.ObjectMetadata
import com.amazonaws.services.s3.model.PutObjectRequest
import lombok.RequiredArgsConstructor
import org.apache.commons.io.FilenameUtils
import org.apache.tomcat.util.http.fileupload.FileUtils
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.io.IOException
import java.util.*
import java.util.function.Consumer
import kotlin.collections.ArrayList


@Service
class AwsS3Service(
    private val amazonS3: AmazonS3,
    @Value("\${cloud.aws.s3.bucket}")
    private val bucket: String
) {
    fun uploadImage(multipartFile: List<MultipartFile>): List<String> {
        val fileNameList= mutableListOf<String>()

        // forEach 구문을 통해 multipartFile로 넘어온 파일들 하나씩 fileNameList에 추가
        multipartFile.forEach(Consumer { file: MultipartFile ->
            val fileName = file.originalFilename?.let { createFileName(it) }
            val objectMetadata = ObjectMetadata()
            objectMetadata.contentLength = file.size
            objectMetadata.contentType = file.contentType
//            try {
                file.inputStream.use { inputStream ->
                    amazonS3.putObject(
                        PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                            .withCannedAcl(CannedAccessControlList.PublicRead)
                    )
                }
//            } catch (e: IOException) {
//                throw ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.")
//            }
            if (fileName != null) {
                fileNameList.add(fileName)
            }

        })
        return fileNameList
    }

    fun deleteImage(fileName: String) {
        amazonS3.deleteObject(DeleteObjectRequest(bucket, fileName))
    }

    private fun createFileName(fileName: String): String { // 먼저 파일 업로드 시, 파일명을 난수화하기 위해 random으로 돌립니다.
        return UUID.randomUUID().toString() + "." + FilenameUtils.getExtension(fileName)
    }

}