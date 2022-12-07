package com.example.lash.application.response

import lombok.AllArgsConstructor
import lombok.Data

@Data
@AllArgsConstructor
class UserSignInResponse(accessToken: String) {
    private val accessToken: String? = null
}
