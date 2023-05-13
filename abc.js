$(document).ready(function(){
    $("#sumbit").click(function(){
    var tableRow="<tr>";
    $("#myform").find("input,select").each(function(){
        tableRow +="<td>"+this.value+"</td>";
    });
    tableRow+="<td style='min-width:300px'><button class='btn btn-danger d-inline-block delted me-1'>Delted</button><button class='btn btn-success d-inline-block edit'data-toggle='modal' data-target='#exampleModal'>Edit</button>";
    $("#Table tbody").append(tableRow);
    return false;
});
//clear button to clar form 
$("#clear").click(function(){
    $(this).closest("form").get(0).reset();
});


$("#Table tbody").each(function(){
$(this).on("click","button.delted",function(){
    $(this).closest("tr").remove();
});
$(this).on("click","button.edit",function(){
    $("#exampleModal").appendTo("body").modal("show");
    $("#Firstname").val($(this).closest("tr").find("td:nth-child(1)").text());
    $("#Lastname").val($(this).closest("tr").find("td:nth-child(2)").text());
    $("#mail").val($(this).closest("tr").find("td:nth-child(3)").text());
    $("#mobile").val($(this).closest("tr").find("td:nth-child(4)").text());
    $("#update").attr("value",$(this).closest("tr").index());
   
});

});
$("#update").click(function(){
let $tableCell=$("#Table>tbody>tr").eq($(this).attr("value"));
$tableCell.find("td:nth-child(1)").text( $("#Firstname").val());
$tableCell.find("td:nth-child(2)").text( $("#Lasttname").val());
$tableCell.find("td:nth-child(3)").text( $("#mail").val());
$tableCell.find("td:nth-child(4)").text( $("#mobile").val());
$("span.sucess").removeClass("d-none color-success");
});
$("#cancel").click(function(){
    $(this).closest("form").get(0).reset();
   
  });
});
   
    