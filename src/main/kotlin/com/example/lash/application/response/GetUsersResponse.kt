package com.example.lash.application.response

import com.example.lash.domain.dto.GetUserDto
import org.springframework.data.domain.Page

class GetUsersResponse(page: Page<GetUserDto>) : PageResponse<GetUserDto>(page) {
    val users: List<GetUserDto> = page.content
}