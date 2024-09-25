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

Urls:

8080 - cloud
http://localhost:8080/microservice/dev OR qa

8081 - microservice
http://localhost:8081/limits

8084 - exchange 
http://localhost:8082/currency-exchange/from/AUD/to/INR
http://localhost:8084/currency-exchange/from/AUD (-----)
http://localhost:8084/currency-exchange/to/INR
http://localhost:8084/currency-exchange-all


8083 - conversion (?????)
http://localhost:8083/currency_calculation_feign/from/USD/to/INR/quantity/100

8761 - eureka
http://localhost:8761

8765 - zuul

3000 - front
http://localhost:3000/currency
http://localhost:3000/users

8200 - user 
http://localhost:8200/user-service/all
>>>>>>> 821571a245652bbd61a8240f89ead1992023be82
