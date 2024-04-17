(function(pWindow) {
	if(typeof pWindow.CustomList == "function") {
		throw new Error("CustomList function already defined");
	}

	/*===================== creating default values =============*/
	let mainArray=[];
	let CustomList= function(pId, options) {
		if(!(this instanceof CustomList)) {
			return new CustomList(pId, options);
		}
		this.domEl = document.getElementById(pId);
		if(!this.domEl) {
			throw new Error("dom not found");
		}
		this.options=options||{};
		if(typeof this.options.data == "undefined") {
			this.options.data = [];
		}
		mainArray=this.options.data;
		this.displayList();
	};

	/*==================== creating new list ================*/

	CustomList.prototype.displayList = function(){
		console.log(mainArray);

    this.domEl.innerHTML = "<div class='col-md-6' id='imgDiv' class='profiles' style='color: #fff; padding: 15px;'></div><div class='col-md-6' id='dataDiv' style='color: #fff; padding: 15px;'>Data Division</div>"
	
	arr=mainArray.students;
	let temp = "";
		arr.forEach((item, index) => {
			temp += `<div class="col-md-6 user_profile" style="text-align: center;"><img src='./assets/img/user.png' style='height: 200px; width: 200px;' onclick='CustomList.prototype.getData(${index})'><br><label class="flt_name">${item.name}</label></div>`;
		})
	document.getElementById("imgDiv").innerHTML = temp + `<label style="padding: 15px;">Filter: </label><input type='text' style='color: #111;' id='getUser' onKeyup='CustomList.prototype.filter()'>`;

    let user_data = "";
    user_data += `<div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">Name: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='text' id='uName'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">Id: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='uId'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">M1: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='m1'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">M2: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='m2'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">M3: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='m3'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">M4: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='m4'></div>
                  <div class="col-md-3" style="margin-top: 10px; margin-bottom: 10px;">M5: </div><div class="col-md-9" style="margin-top: 10px; margin-bottom: 10px; color: #111;"><input type='number' id='m5'></div>

                  <div style='float: right; margin-top: 40px;'>
                  <button style="color:#111; padding: 5px 15px;" onclick='CustomList.prototype.editbt()' id='editbt' >Edit</button>
                  <button style="color:#111; padding: 5px 15px;"  onclick=''>Save</button>
                  </div>`;
    document.getElementById("dataDiv").innerHTML= user_data;


   


   CustomList.prototype.getData = function (index){
   	// console.log(mainArray.students[index].name)
   	document.getElementById('uName').value = mainArray.students[index].name;
   	document.getElementById('uId').value = mainArray.students[index].id;
   	document.getElementById('m1').value = mainArray.students[index].m1;
   	document.getElementById('m2').value = mainArray.students[index].m2;
   	document.getElementById('m3').value = mainArray.students[index].m3;
   	document.getElementById('m4').value = mainArray.students[index].m4;
   	document.getElementById('m5').value = mainArray.students[index].m5;
   	$("#saveBtn").attr("onclick", `CustomList.prototype.save(${index})`)
   }
 


    
   CustomList.prototype.filter = function (){
    var getUser = document.getElementById('getUser').value.toUpperCase();
    var userProfile = document.getElementById('imgDiv');
    var profiles = userProfile.getElementsByClassName('user_profile');
      for (var i = 0; i < profiles.length; i++) {
      	let fname = profiles[i].querySelector('.flt_name').innerText;
      	if (fname.toUpperCase().indexOf(getUser) > -1) {
      		profiles[i].style.display = "";
      	}
      	else {
          profiles[i].style.display = "none";
      	}
      }
    }

}

	pWindow.CustomList = CustomList;
})(window)




