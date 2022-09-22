package com.example.lash.application.response

import com.example.lash.domain.dto.GetUserDto
import org.springframework.data.domain.Page

class GetUsersResponse(val users: Page<GetUserDto>)