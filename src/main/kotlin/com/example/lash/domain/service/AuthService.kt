package com.example.lash.domain.service

import com.example.lash.application.request.UserSignInRequest
import com.example.lash.core.security.JwtTokenProvider
import com.example.lash.domain.repository.UserRepository
import lombok.extern.slf4j.Slf4j
import org.springframework.stereotype.Service
import javax.servlet.http.HttpServletRequest

@Slf4j
@Service
class AuthService(
    private val userRepository: UserRepository,
    private val jwtTokenProvider: JwtTokenProvider
) {
    fun signIn(request: UserSignInRequest): String {
        return if (userRepository.existsByUserIdAndUserPw(request.userId, request.userPw)) {
            jwtTokenProvider.generateJwtToken(request.userId)
        } else {
            ""
        }
    }
}
