package IntroDataStructs;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.time.DayOfWeek;
import java.time.temporal.ChronoUnit;
import java.time.LocalDate;

public class StringToDate {

    public static void main(String[] args) {
        //Day of Year implementation --test cases
        String date1 = "2020-01-15";
        String date2 = "2019-12-31"; //February leap year
        String date3 = "2019-12-31"; //last day of year == 365
        try{
            System.out.println("Output: "+ returnDayOfYear(date1) + "\n"
                    +returnDayOfYear(date2)+"\n"+returnDayOfYear(date3));
            System.out.println("Output: "+ daysBetweenDates(date1,date2));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        //System.out.println(returnDayOfWeek(31,8,2019));
    }

    static String returnDayOfWeek(int day, int month, int year){
        String[] arr = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
        int y = year - (14 - month) / 12;
        int x = y + y / 4 - y / 100 + y / 400;
        int m = month + 12 * ((14 - month) / 12) - 2;
        int d = (day + x + (31 * m) / 12) % 7;
        return arr[d];
    }

    static int returnDayOfYear(String date){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        int dayOfYear = 0;
        try {
            Date d = sdf.parse(date);
            Calendar cal = Calendar.getInstance();
            cal.setTime(d);
            dayOfYear = cal.get(Calendar.DAY_OF_YEAR);
        }catch (ParseException pe){
            System.out.println(pe.getMessage());
        }
        return dayOfYear;
    }

    static int daysBetweenDates(String date1, String date2){
        LocalDate dateBefore = LocalDate.parse(date1);
        LocalDate dateAfter = LocalDate.parse(date2);
        long noOfDaysBetween = ChronoUnit.DAYS.between(dateBefore, dateAfter);
        return Math.abs(Math.toIntExact(noOfDaysBetween));
    }
}
