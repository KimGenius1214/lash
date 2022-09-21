package com.example.lash.domain

import java.time.ZonedDateTime
import javax.persistence.*

@Entity
@Table(name = "user")
class User (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String? = null,
    var userId: String? = null,
    var userPw: String? = null,
    var userEmail: String? = null,
    var userPhoneNo: String? = null,
    var userAddress1: String? = null,
    var userAddress2: String? = null,
    var userAddress3: String? = null,
    var status: String? = null,
    var regDate: ZonedDateTime? = ZonedDateTime.now(),
        )

    enum class UserStatus(val status: String){
        ACTIVATED("activated"),
        DEACTIVATED("deactivated"),
        ;
    }

    @Converter
    class UserStatusConverter : AttributeConverter<UserStatus, String>{
        override fun convertToDatabaseColumn(UserStatus: UserStatus): String {
            return UserStatus.status
        }

        override fun convertToEntityAttribute(value: String): UserStatus {
            return UserStatus.valueOf(value.toUpperCase())
        }
    }

