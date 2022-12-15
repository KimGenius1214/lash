package com.example.lash.domain.projection

interface GetUserProjection {
    val idx: String
    val userId: String
    val name: String
    val email: String
    val hp: String
}
