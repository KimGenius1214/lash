package com.vitasoft.annotation.domain.service

import com.example.lash.application.request.UserSignInRequest
import com.example.lash.core.security.JwtTokenProvider
import com.example.lash.domain.repository.UserRepository
import com.vitasoft.annotation.domain.model.dto.UserDto
import lombok.RequiredArgsConstructor
import lombok.extern.slf4j.Slf4j
import org.springframework.stereotype.Service
import javax.servlet.http.HttpServletRequest

@Slf4j
@Service
@RequiredArgsConstructor
class AuthService {
    private val userRepository: UserRepository? = null
    private val jwtTokenProvider: JwtTokenProvider? = null

    fun signIn(userSignInRequest: UserSignInRequest, request: HttpServletRequest): String {
        val userId: String? = userSignInRequest.userId
        val userPw: String? = userSignInRequest.userPw
        val accessToken: String
        val user: UserDto = userRepository!!.findByUserIdAndUserPw(userId,userPw)
        accessToken = jwtTokenProvider!!.generateJwtToken(user.userId)
        return accessToken
    }
}
