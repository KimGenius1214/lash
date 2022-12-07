package com.example.lash.core.security

import lombok.AllArgsConstructor
import lombok.Getter

@AllArgsConstructor
@Getter
class AuthenticatedMember(userId: String, mapRolesFromAuthorities: String) {
    private val userId: String? = null

    private val mapRolesFromAuthorities: String? = null
}