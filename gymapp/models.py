from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    age = models.IntegerField()
    join_date = models.DateField()

class Payment(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateField()
    due_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('paid', 'Paid'), ('late', 'Late')])

class Attendance(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE, related_name='attendances')
    check_in_time = models.TimeField()
    date = models.DateField()
    payment_status = models.CharField(
        max_length=20, 
        choices=[('paid', 'Paid'), ('unpaid', 'Unpaid')], 
        default='unpaid'
    )

    # Adding a unique constraint to prevent duplicate entries for the same member on the same date
    class Meta:
        unique_together = ('member', 'date')

    def __str__(self):
        return f"{self.member.name} - {self.date}"
