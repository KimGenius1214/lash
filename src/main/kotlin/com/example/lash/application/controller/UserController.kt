package com.example.lash.application.controller

import com.example.lash.application.request.CreateUserRequest
import com.example.lash.application.request.LoginUserRequest
import com.example.lash.application.request.UpdateUserRequest
import com.example.lash.application.response.GetUsersResponse
import com.example.lash.domain.dto.GetUserDto
import com.example.lash.domain.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.util.StringUtils
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
    fun getUser(@PathVariable idx: String?): GetUserDto{
        val getUserDto = userService.getUser(idx)
        return getUserDto
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun createUser(
        @RequestBody @Validated createUserRequest: CreateUserRequest
    ){
        return userService.createUser(createUserRequest)
    }

    @PutMapping("/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun updateUser(
        @RequestBody @Validated updateUserRequest: UpdateUserRequest
    ){
        return userService.updateUser(updateUserRequest)
    }

    @DeleteMapping("/{idx}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
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

    @DeleteMapping("/all")
    fun deleteAllUsers(){
        return userService.deleteAllUser()
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    fun loginAccess(
        @RequestBody @Validated loginUserRequest: LoginUserRequest
    ): GetUserDto {
        val userId: String? = loginUserRequest.userId
        val userPw: String? = loginUserRequest.userPw

        val getUserDto = userService.getUserLogin(userId)
        if (!StringUtils.isEmpty(userPw)) {
            if (userPw.equals(getUserDto.userPw)) {
                return getUserDto
            }
        }
        return getUserDto
    }
}

