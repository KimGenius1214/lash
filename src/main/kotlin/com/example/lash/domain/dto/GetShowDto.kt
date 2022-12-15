package com.example.lash.domain.dto

import com.example.lash.domain.entity.Show

class GetShowDto(show: Show) {
    val idx = show.idx
    val title = show.title
    val place = show.place
    val info = show.info
    val image = show.image
    val link = show.link
}
