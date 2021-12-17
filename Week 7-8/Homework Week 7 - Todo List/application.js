$(document).ready(function(){
    function onTasksLoaded(tasks){
        tasks.forEach (
            ({
                id,
                taskName,
                taskDescription,
                taskStatus,
                startDate,
                dueDate,
                assignedUser,
            }) => {
                var row = '<tr><td>${id}</td><td>${taskName}</td><td>${taskDescription}</td><td>${taskStatus}</td><td>${startDate}</td><td>${dueDate}</td><td>${assignedUser}</td><td><button class="removeButton">Remove</button></td></tr>';
                $("#task-list tbody").append(row);
            }
        );
    }

    function onError(jqXhr, textStatus){
        console.log("textStatus: ", textstatus);
    }

    $.ajax({
        method: "GET",
        url: "taskData.json",
        success: onTasksLoaded,
        error: onError,
    });

    $("table").on("click", "removeButton", function(){
        $(this).closest("tr").remove();
    });
});