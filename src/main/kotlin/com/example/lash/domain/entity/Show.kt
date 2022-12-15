package com.example.lash.domain.entity

import lombok.Data
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Data
@Entity
@Table(name = "SHOW")
class Show(
    @Id @Column(name = "IDX") val idx: String,

    @Column(name = "TITLE") val title: String,

    @Column(name = "PLACE") val place: String,

    @Column(name = "PERIOD") val period: String? = null,

    @Column(name = "INFO") val info: String,

    @Column(name = "IMAGE") val image: String,

    @Column(name = "PRICE") val price: String? = null,

    @Column(name = "LINK") val link: String
)
