package com.example.lash.domain.repository

import com.example.lash.domain.entity.Show
import com.example.lash.domain.projection.GetShowProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ShowRepository : JpaRepository<Show, String> {
    fun findByIdx(idx: String): Show
    fun findAllBy(): List<GetShowProjection>
}