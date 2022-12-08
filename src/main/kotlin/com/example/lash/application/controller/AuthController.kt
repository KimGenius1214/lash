package com.example.lash.application.controller

import com.example.lash.application.request.UserSignInRequest
import com.example.lash.application.response.UserSignInResponse
import com.example.lash.domain.service.AuthService
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v1/api/auth")
class AuthController(
    private val authService: AuthService
) {
    @ApiOperation(value = "로그인")
    @PostMapping("/sign-in")
    @ResponseStatus(HttpStatus.OK)
    fun signIn(
        @RequestBody request: UserSignInRequest
    ): UserSignInResponse {
        val accessToken = authService.signIn(request)
        return UserSignInResponse(accessToken)
    }
}
