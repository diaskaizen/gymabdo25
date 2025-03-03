from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberViewSet, PaymentViewSet, AttendanceViewSet, MemberListCreateView, DashboardData,  get_today_attendance
from .import views
router = DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'attendance', AttendanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('members/', MemberListCreateView.as_view(), name='member-list-create'),
    path('dashboard-data/', DashboardData.as_view(), name='dashboard-data'),
     path('attendance/today/<int:member_id>/', views.get_today_attendance, name='get_today_attendance'),
]
