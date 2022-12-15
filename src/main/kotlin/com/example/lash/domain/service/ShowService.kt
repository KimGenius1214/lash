package com.example.lash.domain.service

import com.example.lash.domain.dto.GetShowDto
import com.example.lash.domain.entity.Show
import com.example.lash.domain.projection.GetShowProjection
import com.example.lash.domain.repository.ShowRepository
import org.springframework.stereotype.Service

@Service
class ShowService(
    private val showRepository: ShowRepository
) {
    fun getShow(idx: String) = GetShowDto(showRepository.findByIdx(idx))

    fun getShows(): List<GetShowProjection> {
        return showRepository.findAllBy()
    }

}