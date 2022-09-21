package com.example.lash.application.controller

import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.application.response.GetUserResponse
import com.example.lash.application.response.GetUsersResponse
import com.example.lash.domain.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(
    @Autowired
    private var userService: UserService
) {

    @GetMapping("/v1/api/user/{userId}")
    @ResponseStatus(HttpStatus.OK)
    fun getUser(@PathVariable id: Long): GetUserResponse{
        val getUserDto = userService.getUser(id)
        return GetUserResponse(getUserDto)
    }

    @PutMapping("/v1/api/user/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun updateUser(
        @PathVariable id: Long,
        @RequestBody @Validated updateUserRequest: UpdateUserRequest
    ){
        return userService.updateUser(id, updateUserRequest)
    }

    @DeleteMapping("/v1/api/user/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(
        @PathVariable id: Long
    ){
        return userService.deleteUser(id)
    }

//    @GetMapping("/v1/api/users")
//    @ResponseStatus(HttpStatus.OK)
//    fun getUsers(
//        @RequestParam userId: String,
//        @RequestParam page: Int
//    ): GetUsersResponse {
//        val users = userService.getUsers(userId, PageRequest.of(page, 5))
//        return GetUsersResponse(users)
//    }
}