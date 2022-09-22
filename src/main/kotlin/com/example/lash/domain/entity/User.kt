package com.example.lash.domain.entity

import java.time.ZonedDateTime
import javax.persistence.*

@Entity
@SequenceGenerator(
    name="seq_user",
    sequenceName = "seq_user",
    initialValue = 1,
    allocationSize = 1
)
@Table(name = "app_user")
class User (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_user")
    @Column(name = "USER_IDX")
    var idx: Long? = null,

    @Column(name = "USER_USERID")
    var userId: String? = null,

    @Column(name = "USER_USERPW")
    var userPw: String? = null,

    @Column(name = "USER_NAME")
    var name: String? = null,

    @Column(name = "USER_HP")
    var hp: String? = null,

    @Column(name = "USER_EMAIL")
    var email: String? = null,

    @Column(name = "USER_ADDRESS1")
    var address1: String? = null,

    @Column(name = "USER_ADDRESS2")
    var address2: String? = null,

    @Column(name = "USER_ZIPCODE")
    var zipcode: String? = null,

    @Column(name = "USER_SNS")
    var sns: String? = null,

    @Column(name = "USER_REGDATE")
    var regDate: ZonedDateTime? = ZonedDateTime.now(),
        )
// test

//    enum class UserStatus(val status: String){
//        ACTIVATED("activated"),
//        DEACTIVATED("deactivated"),
//        ;
//    }
//
//    @Converter
//    class UserStatusConverter : AttributeConverter<UserStatus, String>{
//        override fun convertToDatabaseColumn(UserStatus: UserStatus): String {
//            return UserStatus.status
//        }
//
//        override fun convertToEntityAttribute(value: String): UserStatus {
//            return UserStatus.valueOf(value.toUpperCase())
//        }
//    }

