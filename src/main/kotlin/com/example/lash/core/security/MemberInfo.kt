package com.example.lash.core.security

import java.lang.annotation.Retention
import java.lang.annotation.RetentionPolicy

@Target(AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.TYPE_PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
annotation class MemberInfo 