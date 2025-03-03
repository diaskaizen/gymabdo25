from rest_framework import serializers
from .models import Member, Payment, Attendance

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

class DashboardDataSerializer(serializers.Serializer):
    # English names can be kept for the backend if needed, with Arabic labels as the user-facing fields
    total_members = serializers.IntegerField(label="إجمالي الأعضاء")
    total_payments = serializers.IntegerField(label="إجمالي المدفوعات")
    total_attendances = serializers.IntegerField(label="إجمالي الحضور")
    late_payments = serializers.IntegerField(label="المدفوعات المتأخرة")
