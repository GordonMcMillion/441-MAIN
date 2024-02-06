function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    switch (choice) {
        case 1:
            if (answer1 === "Go ahead and be brave") {
                document.getElementById("story").innerHTML = "you, now filled with courage, faces the cool ninja on the mysterious mountain. What will be your next move?";
                document.getElementById("choice1").innerHTML = "Use ninja skills";
                document.getElementById("choice2").innerHTML = "Try a surprise attack";
            } else if (answer1 === "Use ninja skills") {
                document.getElementById("story").innerHTML = "you skillfully uses ninja moves to counter the cool ninja. You successfully outmaneuver your opponent! What's your next step?";
                document.getElementById("choice1").innerHTML = "Continue the journey";
                document.getElementById("choice2").innerHTML = "Rest and reflect";
            } else if (answer1 === "Try a surprise attack") {
                document.getElementById("story").innerHTML = "you attempt a surprise attack but is met with a swift counter from the cool ninja. It's time to reassess your strategy. What will you do?";
                document.getElementById("choice1").innerHTML = "Regroup and strategize";
                document.getElementById("choice2").innerHTML = "Retreat and rethink";
            }
            break;

        case 2:
            if (answer2 === "Scan the situation") {
                document.getElementById("story").innerHTML = "you take a moment to assess the ninja's movements. What is your next course of action?";
                document.getElementById("choice1").innerHTML = "Observe from a distance";
                document.getElementById("choice2").innerHTML = "Approach cautiously";
            } else if (answer2 === "Observe from a distance") {
                document.getElementById("story").innerHTML = "you observes the cool ninja from a safe distance, gaining valuable insights into their techniques. What's your next move?";
                document.getElementById("choice1").innerHTML = "Plan a strategic attack";
                document.getElementById("choice2").innerHTML = "Seek assistance from allies";
            } else if (answer2 === "Approach cautiously") {
                document.getElementById("story").innerHTML = "you cautiously approaches the cool ninja, ready to engage in a battle of skills. What strategy will you employ?";
                document.getElementById("choice1").innerHTML = "Engage in a direct duel";
                document.getElementById("choice2").innerHTML = "Attempt a distraction";
            }
            break;

        

        default:
        
            break;
    }
}
