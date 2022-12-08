package com.example.lash.core.security

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.codec.DecodingException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.stereotype.Component
import java.nio.charset.StandardCharsets
import java.util.*
import javax.servlet.http.HttpServletRequest

@Component
class JwtTokenProvider {
    @Value("\${app.jwtSecret}")
    private val jwtSecret: String? = null

    @Value("\${app.jwtExpirationMs}")
    private val jwtExpirationMs: Long = 0
    fun generateJwtToken(userId: String?): String {
        val secretKey = Keys.hmacShaKeyFor(jwtSecret!!.toByteArray(StandardCharsets.UTF_8))
        val now = Date()
        val expireAt = Date(now.time + jwtExpirationMs)
        return Jwts.builder()
            .claim("userId", userId) //                .claim("role", "ROLE_" + userRole.toString())
            .setIssuedAt(now)
            .setExpiration(expireAt)
            .signWith(secretKey, SignatureAlgorithm.HS256)
            .compact()
    }

    fun resolveToken(request: HttpServletRequest): Claims? {
        var token = request.getHeader("Authorization")
        token = if (token == null) return null else if (token.contains("Bearer")) token.replace(
            "Bearer ",
            ""
        ) else throw DecodingException("")
        return getClaimsFromToken(token)
    }

    private fun getClaimsFromToken(token: String): Claims {
        val secretKey = Keys.hmacShaKeyFor(jwtSecret!!.toByteArray(StandardCharsets.UTF_8))
        return Jwts.parserBuilder()
            .setSigningKey(secretKey)
            .build()
            .parseClaimsJws(token)
            .body
    }

    fun getAuthentication(claims: Claims): Authentication {
        return UsernamePasswordAuthenticationToken(claims["userId"], "", getAuthorities(claims))
    }

    private fun getAuthorities(claims: Claims): Collection<GrantedAuthority> {
        val grantedAuthorities: MutableList<GrantedAuthority> = ArrayList()
        val role = claims.get("role", String::class.java)
        val simpleGrantedAuthority = SimpleGrantedAuthority(role)
        grantedAuthorities.add(simpleGrantedAuthority)
        return grantedAuthorities
    }
}