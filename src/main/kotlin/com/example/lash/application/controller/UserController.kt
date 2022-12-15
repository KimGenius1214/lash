package com.example.lash.application.controller

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.LoginUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.application.response.GetUsersResponse
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/users")
class UserController(
    private var userService: UserService
) {

    @GetMapping("/{idx}")
    @ResponseStatus(HttpStatus.OK)
    fun getUser(@PathVariable idx: String): GetUserDto {
        return userService.getUser(idx)
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun createUser(
        @RequestBody @Validated request: CreateUserRequest
    ) {
        userService.createUser(request)
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun updateUser(
        @RequestBody @Validated request: UpdateUserRequest
    ) {
        return userService.updateUser(request)
    }

    @DeleteMapping("/{idx}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(
        @PathVariable idx: String
    ) {
        return userService.deleteUser(idx)
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    fun getUsers(
    ): GetUsersResponse {
        val users = userService.getUsers()
        return GetUsersResponse(users)
    }

    @DeleteMapping
    fun deleteAllUsers() =
        userService.deleteAllUsers()

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    fun loginAccess(
        @RequestBody @Validated request: LoginUserRequest
    ): GetUserDto {
        return userService.getUserLogin(request.userId, request.userPw)
    }
}

