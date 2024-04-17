(function(pWindow) {
	if(typeof pWindow.CustomList == "function") {
		throw new Error("CustomList function already defined");
	}

	/*===================== creating default values =============*/
	let mainArray=[];
	let userArray=[];
	let count=0;
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
    
		this.domEl.innerHTML = `
		<!-- Login Page -->
		<div class="mainDiv" id="mainDiv">
		<div class="form">
		<input type="text" placeholder="Username" id="getUserName"><br>
		<button id="submitBtn" onclick="CustomList.prototype.submitName()">Submit</button>
		</div>
		</div>
		<!-- Product Page -->
		<div class="subDiv1" id="subDiv1">
		<div class="row navItems">
		<button class="back" onclick="CustomList.prototype.backBtn()"><i class="fa fa-long-arrow-left"></i>&nbsp;&nbsp;back</button>
		<h5 id="thisUser">username</h5>
		<button class="navPgBtn" onclick="CustomList.prototype.navPgBtn()">User list</button>
		</div>
		<div class="row filter"><input type="text" placeholder="Search..." id="filter" onKeyup='CustomList.prototype.filter()'></div>
		<div class="row lists">
		<div class="col-lg-7 col-md-7 col-sm-12 product" id="product">Product List</div>
		<div class="col-lg-5 col-md-5 col-sm-12 cart" id="cart">Cart</div>
		</div>
		</div>
		<!-- Users and Cart Page -->
		<div class="subDiv2" id="subDiv2">
		<div class="row navItems">
		<h5>USERS LIST :</h5>
		<button class="homeBtn" onclick="CustomList.prototype.homeBtn()">Home</button>
		</div>
		<div class="row lists">
		<div class="col-lg-7 col-md-7 col-sm-12 users" id="users">Users List</div>
		<div class="col-lg-5 col-md-5 col-sm-12 total" id="total">Total</div>
		</div>
		</div>`;
    
        $("#subDiv1").hide();
		$("#subDiv2").hide();
		
	CustomList.prototype.submitName = function (){
		let getUserName = document.getElementById("getUserName").value;
		$("#mainDiv").hide();
		$("#subDiv1").show();
		userObject = {
			userId: count,
			getUserName
		}
		count++;
		userArray.push(userObject);
		document.getElementById("getUserName").value = "";
		document.getElementById('thisUser').textContent = `${getUserName}`;

		let arr = mainArray.ProductCollection;
		let temp = "";
		arr.forEach(function (item, index) {
			temp += `<div class="cartDiv" onclick="CustomList.prototype.select(${index})"><img class='productImg' src="./assets${item.ProductPicUrl}" alt="${item.Name}"><h5 class="flt_Pname">${item.Name}</h5><span><span class="symbol">${item.CurrencyCode}</span>&nbsp;<span class="cost">${item.Price}</span></span><h6 class="status">${item.Status}</h6></div>`;
		})
		document.getElementById("product").innerHTML = `${temp}`;
	}
    
	CustomList.prototype.backBtn = function (){
		$("#subDiv1").hide();
		$("#mainDiv").show();
	}

	CustomList.prototype.navPgBtn = function (){
		$("#subDiv1").hide();
		$("#subDiv2").show();
	}
    
	CustomList.prototype.homeBtn = function (){
		$("#subDiv2").hide();
		$("#mainDiv").show();
	}

	CustomList.prototype.filter = function (){
		var getProductName = document.getElementById('filter').value.toUpperCase();
		var getProductDiv = document.getElementById('product');
		var customProduct = getProductDiv.getElementsByClassName('cartDiv');
		  for (var i = 0; i < customProduct.length; i++) {
			  let Pname = customProduct[i].querySelector('.flt_Pname').innerText;
			  if (Pname.toUpperCase().indexOf(getProductName) > -1) {
				customProduct[i].style.display = "";
			  }
			  else {
				customProduct[i].style.display = "none";
			  }
		  }
		}

	CustomList.prototype.select = function (index) {
			userObject.cart = {
				product: mainArray.ProductCollection[index].Name
			}
			let cartArray = [];
			cartArray.push(userObj);
			console.log(cartArray);
			let cartDisplay = $("#cart");
			let cart = "";
			cartArray.forEach(function (item) {
				cart += `<div class="row cartImg">
				<img src="${item.ProductPicUrl}">
				<h5>${item.Name}</h5>
				</div>`
			})
			cartDisplay.innerHTML = cart;
		}	


    }
    
	

	pWindow.CustomList = CustomList;
})(window)




