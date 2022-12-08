package com.example.lash.core.config

import lombok.extern.slf4j.Slf4j
import org.aspectj.lang.annotation.AfterThrowing
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Before
import org.springframework.stereotype.Component
import org.springframework.web.context.request.RequestContextHolder
import org.springframework.web.context.request.ServletRequestAttributes
import java.util.*

@Slf4j
@Aspect
@Component
class AOPConfig {
    @Before("execution(* *..controller.*.*(..))")
    fun recordRequestURI() {
        val request =
            (Objects.requireNonNull(RequestContextHolder.getRequestAttributes()) as ServletRequestAttributes).request
        val queryString = request.queryString
    }

    @AfterThrowing(value = "execution(* *..controller.*.*(..))", throwing = "exception")
    fun logError(exception: RuntimeException) {
    }
}