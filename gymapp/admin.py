from django.contrib import admin
from .models import Member, Payment, Attendance

# إدارة نموذج العضو (Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'age', 'join_date')  # عرض الاسم، الهاتف، العمر، وتاريخ الانضمام
    search_fields = ['name', 'phone']  # البحث في الاسم ورقم الهاتف
    list_filter = ('age', 'join_date')  # تصفية العمر وتاريخ الانضمام

# إدارة نموذج الدفع (Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('member', 'amount', 'payment_date', 'due_date', 'status')  # عرض العضو، المبلغ، تاريخ الدفع، تاريخ الاستحقاق، وحالة الدفع
    search_fields = ['member__name', 'status']  # البحث في اسم العضو وحالة الدفع
    list_filter = ('status', 'payment_date')  # تصفية الحالة وتاريخ الدفع

# إدارة نموذج الحضور (Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('member', 'check_in_time', 'date', 'payment_status')  # عرض العضو، وقت تسجيل الدخول، التاريخ، وحالة الدفع
    search_fields = ['member__name', 'payment_status']  # البحث في اسم العضو وحالة الدفع
    list_filter = ('payment_status', 'date')  # تصفية حالة الدفع والتاريخ

# التسجيل في لوحة التحكم
admin.site.register(Member, MemberAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(Attendance, AttendanceAdmin)
