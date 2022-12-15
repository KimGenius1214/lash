package com.example.lash.application.response

import com.example.lash.domain.projection.GetUserProjection

class GetUsersResponse(val users: List<GetUserProjection>)