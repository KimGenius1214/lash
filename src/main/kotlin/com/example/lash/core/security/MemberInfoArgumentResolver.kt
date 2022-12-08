package com.example.lash.core.security

import org.springframework.core.MethodParameter
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.bind.support.WebDataBinderFactory
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.method.support.ModelAndViewContainer

@Component
class MemberInfoArgumentResolver : HandlerMethodArgumentResolver {
    override fun supportsParameter(parameter: MethodParameter): Boolean {
        return parameter.getParameterAnnotation(MemberInfo::class.java) != null && parameter.parameterType == AuthenticatedMember::class.java
    }

    override fun resolveArgument(
        parameter: MethodParameter,
        modelAndViewContainer: ModelAndViewContainer?,
        webRequest: NativeWebRequest,
        webDataBinderFactory: WebDataBinderFactory?
    ): Any? {
        val authenticationToken = SecurityContextHolder.getContext().authentication
        val userId = authenticationToken.principal.toString()
        return AuthenticatedMember(
            userId,
            mapRolesFromAuthorities(authenticationToken.authorities as Collection<GrantedAuthority>)
        )
    }

    private fun mapRolesFromAuthorities(authorities: Collection<GrantedAuthority>): String {
        val it = authorities.iterator()
        val grantedAuthority = it.next()
        return grantedAuthority.authority
    }
}