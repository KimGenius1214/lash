package com.example.lash.application.controller

import com.example.lash.application.request.UserSignInRequest
import com.example.lash.application.response.UserSignInResponse
import com.vitasoft.annotation.domain.service.AuthService
import io.swagger.annotations.ApiOperation
import lombok.RequiredArgsConstructor
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
class AuthController {
    private val authService: AuthService? = null
    @ApiOperation(value = "로그인")
    @PostMapping("/v1/api/auth/signin")
    @ResponseStatus(HttpStatus.OK)
    fun signIn(
        request: HttpServletRequest?,
        @RequestBody userSignInRequest: UserSignInRequest
    ): UserSignInResponse {
        val accessToken = authService!!.signIn(userSignInRequest, request!!)
        return UserSignInResponse(accessToken)
    }
}