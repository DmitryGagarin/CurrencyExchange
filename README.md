# microservice_try
Currency Calculator App

Project based on: <br>
https://www.javatpoint.com/creating-a-simple-microservice$0

<br>

Except Currency Calculator I have a table with registered users (trained work with db)

Used Technologies: <br>
[-] Spring Cloud <br>
[-] Spring Boot <br>
[-] Spring Data JPA <br>
[-] Postgre Database <br>
[-] Eurika <br>
[-] React <br>
[-] Rest API <br>

![](https://gitflic.ru/project/gagarin1love/currencycalculatorspringreactpostgre/blob?file=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-09-25%20%D0%B2%2021.54.24.gif&branch=master$0)


Urls:

8080 - cloud<br>
http://localhost:8080/microservice/dev OR qa

8081 - microservice<br>
http://localhost:8081/limits

8084 - exchange <br>
http://localhost:8082/currency-exchange/from/AUD/to/INR <br>
http://localhost:8084/currency-exchange/from/AUD (-----) <br>
http://localhost:8084/currency-exchange/to/INR <br>
http://localhost:8084/currency-exchange-all <br>


8083 - conversion (?????)<br>
http://localhost:8083/currency_calculation_feign/from/USD/to/INR/quantity/100

8761 - eureka<br>
http://localhost:8761<br>

8765 - zuul<br>

3000 - front<br>
http://localhost:3000/currency<br>
http://localhost:3000/users<br>

8200 - user <br>
http://localhost:8200/user-service/all<br>
