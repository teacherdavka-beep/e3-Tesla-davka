"use client";

type BookingButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BookingButton({ children, className }: BookingButtonProps) {
  return (
    <a
      href="#"
      className={className}
      data-cal-link="davka-teacher-mdaqw4/webdev20"
      data-cal-namespace="webdev20"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </a>
  );
}
