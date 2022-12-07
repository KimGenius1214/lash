package com.vitasoft.annotation.domain.model.dto

import lombok.Data

@Data
public class UserDto {
    val userId: String? = null
    val userName: String? = null
    private val userRole: String? = null
}