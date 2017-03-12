# Angular2-REST-Debug-Demo
This reposity shows how to debug Angular2 frontend with JavaEE REST backend together.
## Installation process
install TomEE server on your computer<br>
clone Dukes Project. Open it with Netbeans or IntelliJ<br>
start TomEE server, run Dukes project. Check if htpp://localhost:8080/dukes/resources/dukes works<br>
clone angular-test project. Open it in WebStrom. install npm then start npm Check if http://localhost:4200 works<br>
##how to debug:
1. In NetBeans, just put break point then right click the project, select "clean and build", then "debug".<br>
2. In IntelliJ, you have to define a remote debug configuration and start TomEE with JPDA debug function. Then put break point. For detail instruction, pls. refer to link http://tomee.apache.org/contrib/debug/debug-intellij.html <br>

##magic at last:
just refresh http://localhost:4200 , then the program stops at the break point you set in Java file.<br>
##have fun!
