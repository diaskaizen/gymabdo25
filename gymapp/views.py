from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Sum
from datetime import date
from .models import Member, Payment, Attendance
from .serializers import MemberSerializer, DashboardDataSerializer, PaymentSerializer, AttendanceSerializer
from rest_framework import viewsets

from django.shortcuts import render
from django.http import JsonResponse

def get_today_attendance(request, member_id):
    # Fetch the member instance (you can use `member_id` to find the member)
    try:
        member_instance = Member.objects.get(id=member_id)
    except Member.DoesNotExist:
        return JsonResponse({'error': 'Member not found'}, status=404)

    # Get today's attendance for the member
    today_attendance = Attendance.objects.filter(member=member_instance, date=date.today())

    # Return the attendance data as JSON
    attendance_data = [
        {
            'check_in_time': entry.check_in_time.strftime('%H:%M'),
            'payment_status': entry.get_payment_status_display()  # For the readable version of payment status
        }
        for entry in today_attendance
    ]

    return JsonResponse({'attendance': attendance_data})


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

# عرض قائمة الأعضاء وإنشاء عضو جديد
class MemberListCreateView(generics.ListCreateAPIView):
    queryset = Member.objects.all()  # استرجاع جميع الأعضاء
    serializer_class = MemberSerializer  # تعيين المُسلسل للأعضاء

# عرض بيانات لوحة القيادة
class DashboardData(APIView):
    def get(self, request, *args, **kwargs):
        # حساب إجمالي الأعضاء
        total_members = Member.objects.count()
        
        # حساب إجمالي الحضور لليوم الحالي
        today = date.today()
        today_attendance = Attendance.objects.filter(date=today).count()

        # حساب الإيرادات الشهرية
        monthly_revenue = Payment.objects.filter(payment_date__month=today.month).aggregate(total_revenue=Sum('amount'))['total_revenue']

        # حساب المدفوعات المتأخرة
        late_payments = Payment.objects.filter(status='late').count()

        # إعداد البيانات لإرسالها
        data = {
            'إجمالي_الأعضاء': total_members,
            'إجمالي_المدفوعات': monthly_revenue or "0 ج.م",  # Display revenue in the correct format
            'إجمالي_الحضور': today_attendance,
            'المدفوعات_المتأخرة': late_payments,
        }

        # تسلسل البيانات للرد عليها
        return Response(data, status=status.HTTP_200_OK)  # إعادة البيانات بنجاح

    def post(self, request, *args, **kwargs):
        # التحقق من البيانات المدخلة
        serializer = DashboardDataSerializer(data=request.data)
        if serializer.is_valid():
            # إضافة منطق حفظ البيانات إذا كان مطلوبًا، مثل إنشاء/تحديث السجلات
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # إعادة البيانات المحفوظة بنجاح
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # رد الخطأ إذا كانت البيانات غير صالحة
