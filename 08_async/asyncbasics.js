/** 
 * # JS is Synchronous and Single threaded (Default Javascript behaviour)
 * # Execution Context
 *      1. Execute one line of code at a time
 *      2. Each operation waits for the last one to complete before executing
 *      3. call stack, memory heap
 * # Blocking code vs Non Blocking Code
 *      1. Blocking code ->  block the flow of program -> (Analogy: aap yahan rukiye kuch mat kariyega mai ek glass pani leke aata hun) -> read file sync(file ko read karke ane tak apka program ruka rahega)
 *      2. Non Blocking code -> Does not block execution-> (Analogy: aap yahan rukiye aur apna kaam kariye mai tab tak ek glass pani leke aata hun) -> read file async
 * Example: Jaise user registration karne ke baad hume successful message bhjna hai user ko but agar hum isme non blocking code likh dengey that means user ka registration hota rahega
 *          databse mai and hum pehle hi user ko success msg bhej dengey , which is wrong. So acc to  use case we have to decide which way is better
 * **/
