package com.example.lash.domain.entity

import com.example.lash.application.request.UpdateUserRequest
import lombok.AllArgsConstructor
import lombok.Data
import lombok.NoArgsConstructor
import java.time.ZonedDateTime
import javax.persistence.*

@Data
@Entity
//@SequenceGenerator(
//    name = "seq_user",
//    sequenceName = "seq_user",
//    initialValue = 1,
//    allocationSize = 1
//)
@Table(name = "app_user")
class User(
    @Id
    @Column(name = "IDX")
    var idx: String? = null,

    @Column(name = "ID")
    var userId: String? = null,

    @Column(name = "PW")
    var userPw: String? = null,

    @Column(name = "NAME")
    var name: String? = null,

    @Column(name = "HP")
    var hp: String? = null,

    @Column(name = "EMAIL")
    var email: String? = null,

    @Column(name = "ADDRESS1")
    var address1: String? = null,

    @Column(name = "ADDRESS2")
    var address2: String? = null,

    @Column(name = "ZIPCODE")
    var zipcode: String? = null,

    @Column(name = "SNS")
    var sns: String? = null,

    @Column(name = "REGDATE")
    var regDate: ZonedDateTime? = ZonedDateTime.now(),
) {
    fun updateUser(updateUserRequest: UpdateUserRequest) {
        userId = updateUserRequest.userId
        name = updateUserRequest.name
    }


}
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

