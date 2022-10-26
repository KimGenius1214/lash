package com.example.lash.application.controller

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.application.response.GetUserResponse
import com.example.lash.application.response.GetUsersResponse
import com.example.lash.domain.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class UserController(
    @Autowired
    private var userService: UserService
) {

    @GetMapping("/{idx}")
    @ResponseStatus(HttpStatus.OK)
    fun getUser(@PathVariable idx: String): GetUserResponse{
        val getUserDto = userService.getUser(idx)
        return GetUserResponse(getUserDto)
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun createUser(
        @RequestBody @Validated createUserRequest: CreateUserRequest
    ){
        println("호출")
        return userService.createUser(createUserRequest)
    }

    @PutMapping("/{idx}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun updateUser(
        @PathVariable idx: String,
        @RequestBody @Validated updateUserRequest: UpdateUserRequest
    ){
        return userService.updateUser(idx, updateUserRequest)
    }

//    @DeleteMapping("/delete/{idx}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping("/{idx}", method = [RequestMethod.DELETE])
    fun delete(
        @PathVariable idx: String
    ){
        return userService.deleteUser(idx)
    }

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    fun getUsers(
    ): GetUsersResponse {
        val users = userService.getUsers()
        return GetUsersResponse(users)
    }
}