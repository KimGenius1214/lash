package com.example.lash.application.controller

import com.example.lash.application.response.GetShowsResponse
import com.example.lash.domain.dto.GetShowDto
import com.example.lash.domain.entity.Show
import com.example.lash.domain.repository.ShowRepository
import com.example.lash.domain.service.ShowService
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/shows")
class ShowController(
    private val showService: ShowService
) {
    @GetMapping("{idx}")
    @ResponseStatus(HttpStatus.OK)
    fun getShow(@PathVariable idx: String): GetShowDto{
        return showService.getShow(idx)
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    fun getShows(): GetShowsResponse{
        val shows = showService.getShows()
        return GetShowsResponse(shows)
    }
}