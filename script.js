            var htmlArray = [];
            var currentElement;
            var number = 1;
            
            $(document).ready(function(){
                $(".addBanner").click(function(){
                $(".bannerContainer").append("<div class='box'><div class='input'><label for='image'>src</label><input class='inputBox' type='url' name='image'></div><div class='input'><label for='name'>alt</label><input class='inputBox' type='text' name='name'></div><div class='input'><label for='url'>href</label><input class='inputBox' type='url' name='url'></div></div>");
                });
                
                $(".addBook").click(function(){
                $(".booksContainer").append("<div class='box'><div class='input'><label for='image'>src</label><input class='inputBox booksInput' type='url' name='image'></div><div class='input'><label for='alt'>alt</label><input class='inputBox booksInput' type='text' name='alt'></div><div class='input'><label for='url'>href</label><input class='inputBox booksInput' type='url' name='url'></div><div class='input'><label for='title'>заглавие</label><textarea class='inputBox booksInput' id='txtArea' name='title'></textarea></div></div>");
                });
            });
            
            $( function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
            } );

            function appendSectionName() {
                document.getElementById('sectionName').style.display = 'none';

                var name = $('#title').val();
                var element = newSectionName(name);
                htmlArray.push(element);
                element.appendHtml();

                $('#title').val("");
                $('#sectionNameForm')[0].reset();
                number++;
            }
            
            function newSectionName(data) {
                return{
                    id: number,
                    type: "section name",
                    name: data,
                    html: function (){
                        return '<tr class="ui-state-default" id="' + this.id + '"><td class="relative  white" width="722" height="60" align="center"><span class="close" onclick="$(this).parent().parent().remove(); removeFromArr(' + this.id + ')">&#10005;</span><span class="edit" onclick="edit(' + this.id + ')">&#9998;</span><span style="display: block; text-align: center; width: 722px; height: 60px; font-size: 29px; margin-top: 30px;">' + this.name + '</span></td></tr>';
                    },
                    appendHtml: function (){
                        $(".main").append(this.html());
                    },
                    displayForm: function (){
                        $("#sectionNameFormEdit .inputBox").attr("value", this.name);
                        document.getElementById('sectionNameEdit').style.display='block';
                    }
                }
            }
            
            function editSectionName(){
                document.getElementById('sectionNameEdit').style.display = 'none';
                currentElement.name = $('#newTitle').val();
                $('#newTitle').val("");
                $('#sectionNameFormEdit')[0].reset();

                var oldHtmlElement = document.getElementById(currentElement.id);
                var newHtml = currentElement.html();
                oldHtmlElement.outerHTML = newHtml;
            }
             
            function appendLookAll() {
                document.getElementById('lookAllDiv').style.display = 'none';
                
                var lookAllHref = $('#lookAllInput').val();
                var element = newLookAll(lookAllHref);
                htmlArray.push(element);
                element.appendHtml();

                $('#lookAllInput').val("");
                $('#lookAllForm')[0].reset();
                number++;
            }
            
            function newLookAll(data) {
                return{
                    id: number,
                    type: "look all",
                    href: data,
                    html: function (){
                        return '<tr class="ui-state-default" id="' + this.id + '"><td class="relative  white" style="padding-bottom: 30px; padding-top: 20px;" width="722" align="left"><span class="close" onclick="$(this).parent().parent().remove(); removeFromArr(' + this.id + ')">&#10005;</span><span class="edit" onclick="edit(' + this.id + ')">&#9998;</span><div style="margin-bottom: 10px;"><span style="border: 2px solid black; padding: 2px; float: left; text-align: center; font-size: 17px; height: 26px; line-height: 26px; width: 186px; margin-left: 268px;"> <a target="_blank" style="text-decoration: none !important;" href="' + this.href + '"> <span style="color: #000000;">ВИЖ ВСИЧКИ</span> </a> </span></div></td></tr>';
                    },
                    appendHtml: function (){
                        $(".main").append(this.html());
                    },
                    displayForm: function (){
                        $("#newLookAllInput").attr("value", this.href);
                        document.getElementById('lookAllDivEdit').style.display = 'block';
                    }
                }
            }
            
            function editLookAll(){
                document.getElementById('lookAllDivEdit').style.display = 'none';
                currentElement.href = $('#newLookAllInput').val();
                $('#newLookAllInput').val("");
                $('#lookAllFormEdit')[0].reset();

                var oldHtmlElement = document.getElementById(currentElement.id);
                var newHtml = currentElement.html();
                oldHtmlElement.outerHTML = newHtml;
            }
            
            function appendBanner() {
                document.getElementById('banner').style.display = 'none';

                var bannerData = document.getElementsByClassName("bannerInput");
                var src = bannerData[0].value;
                var alt = bannerData[1].value;
                var href = bannerData[2].value;
                
                var element = newBanner(src, alt, href);
                htmlArray.push(element);
                element.appendHtml();

                bannerData[0].value = "";
                bannerData[1].value = "";
                bannerData[2].value = "";
                $('#bannerForm')[0].reset();
                number++;
            }  
            
            function newBanner(src, alt, href) {
                return{
                    id: number,
                    type: "banner",
                    src: src,
                    alt: alt,
                    href: href,
                    html: function (){
                        return '<tr class="ui-state-default" id="' + this.id + '"> <td class="relative  white" style="margin-top:10px; padding-top:13px;" width="722" align="left"><span class="close" onclick="$(this).parent().parent().remove(); removeFromArr(' + this.id + ')">&#10005;</span><span class="edit" onclick="edit(' + this.id + ')">&#9998;</span><a target="_blank" href="' + this.href + '"><img alt="' + this.alt + '" src="' + this.src + '"></a></td></tr>';
                    },
                    appendHtml: function (){
                        $(".main").append(this.html());
                    },
                    displayForm: function (){
                        $("#newBannerSrc").attr("value", this.src);
                        $("#newBannerAlt").attr("value", this.alt);
                        $("#newBannerHref").attr("value", this.href);
                        document.getElementById('bannerDivEdit').style.display = 'block';
                    }
                }
            }
            
            function editBanner(){
                document.getElementById('bannerDivEdit').style.display = 'none';
                currentElement.src = $("#newBannerSrc").val();
                currentElement.alt = $("#newBannerAlt").val();
                currentElement.href = $("#newBannerHref").val();
                $("#newBannerSrc").val("");
                $("#newBannerAlt").val("");
                $("#newBannerHref").val("");
                $('#bannerFormEdit')[0].reset();

                var oldHtmlElement = document.getElementById(currentElement.id);
                var newHtml = currentElement.html();
                oldHtmlElement.outerHTML = newHtml;
            }
            
            function appendBooks() {
                document.getElementById('booksDiv').style.display = 'none';
                
                var html = {id: number, type: "books"};
                
                $(".main").append($('<tbody class="booksTbody">').append('<tr class="ui-state-default"><td class="relative  white" width="722" align="center"><span class="close" onclick="$(this).parent().parent().parent().remove(); removeFromArr(' + number + ')">&#10005;</span><span class="edit" onclick="edit(' + number + ')">&#9998;</span><div id="sortable" class="' + number + '" style="margin-left: 40px;"></div></td></tr><tr class="ui-state-default"><td class="white" style="text-decoration: none; color: #000000;" width="722" align="left"><div id="title' + number + '" style="margin-top: 10px; margin-left: 37px; text-decoration: none; color: #000000;"></div></td></tr>'));
                
                //var trImages = '<tr class="ui-state-default"><td class="white" width="722" align="center"><span class="close" onclick="$(this).parent().parent().parent().remove()">&times;</span><div id="sortable" class="' + number + '" style="margin-left: 40px;"></div></td></tr>';
                //$(".main").append(trImages);
                
                //var trTitles = '<tr class="ui-state-default"><td class="white" style="text-decoration: none; color: #000000;" width="722" align="left"><div id="title' + number + '" style="margin-top: 10px; margin-left: 37px; text-decoration: none; color: #000000;"></div></td></tr>';
                //$(".main").append(trTitles);
                
                var booksData = document.getElementsByClassName("booksInput");
                
                for (var i = 0; i < booksData.length; i+=4) {
                    var src = booksData[i].value;
                    var alt = booksData[i + 1].value;
                    var href = booksData[i + 2].value;
                    var title = booksData[i + 3].value;
                    title = title.replace(/(?:\r\n|\r|\n)/g, '<br />');
                    
                    if (src || 0 !== src.length || src.trim()) {
                        var spanImage = '<span class="ui-state-default" style="float: left; width: 200px; display: block; margin-right: 20px; height: 240px;"><a style="text-decoration: none;" href="' + href + '" target="_blank"> <img src="' + src + '" alt="' + alt + '" width="200" height="240"> </a> </span>';
                        $('.' + number + '').append(spanImage);
                        var spanTitle = '<span style="float: left; text-align: center; width: 200px; font-size: 16px; margin-right: 20px; height: 50px; text-decoration: none; color: #000000;"> <a style="text-decoration: none !important;" href="' + href + '" target="_blank"> <span style="text-decoration: none; color: #000000;">' + title + '</span> </a> </span> ';
                        $('#title' + number + '').append(spanTitle);

                        var book = {src: src, alt: alt, href: href, title: title};
                        html[i] = book;

                        //$('.booksInput')[i].val("");
                        //$('.booksInput')[i + 1].val("");
                        //$('.booksInput')[i + 2].val("");
                        //$('.booksInput')[i + 3].val("");
                        booksData[i].value = "";
                        booksData[i + 1].value = "";
                        booksData[i + 2].value = "";
                        booksData[i + 3].value = "";
                    }
                }
                
                htmlArray.push(html);
                $('#booksForm')[0].reset();
                number++;
            }
            
            function appendLine() {
                $( "tr:last td" ).css('border-bottom', '2px solid #dfdfdf');
                //$( "tr:last td" ).append('<span class="removeLine" onclick="removeLine()">&times;</span>');
                $( "tr:last td" ).append('<span class="removeLine" onclick="removeLine($(this))">&times;</span>');
                
            }
            
            function removeLine(obj) {
                obj.parent().css("border", "none");
                obj.remove();
            }
            
            function appendText() {
                document.getElementById('textDiv').style.display = 'none';
                
                var italicText = $('#italicTextInput').val();
                var element = newText(italicText);
                htmlArray.push(element);
                element.appendHtml();
                    
                $('#textForm')[0].reset();
                $('#italicTextInput').val("");
                number++;
            }
            
            function newText(data) {
                return{
                    id: number,
                    type: "italic text",
                    content: data,
                    html: function (){
                        return '<tr class="ui-state-default" id="' + this.id + '"> <td class="relative  white" style="padding-bottom: 30px;" width="722" align="left"><span class="closeText" onclick="$(this).parent().parent().remove(); removeFromArr(' + this.id + ')">&#10005;</span><span class="editText" onclick="edit(' + this.id + ')">&#9998;</span> <span style="float: right; text-align: center; width: 722px; font-size: 12px;"><i>'+ this.content +'</i></span></td></tr>';
                    },
                    appendHtml: function (){
                        $(".main").append(this.html());
                    },
                    displayForm: function (){
                        $("#newItalicTextInput").attr("value", this.content);
                        document.getElementById('textDivEdit').style.display = 'block';
                    }
                }
            }
            
            function editText(){
                document.getElementById('textDivEdit').style.display = 'none';
                currentElement.content = $('#newItalicTextInput').val();
                $('#newItalicTextInput').val("");
                $('#textFormEdit')[0].reset();

                var oldHtmlElement = document.getElementById(currentElement.id);
                var newHtml = currentElement.html();
                oldHtmlElement.outerHTML = newHtml;
            }
            
            function safeNewsletter() {
                var htmlNewsletter = document.getElementsByTagName('table')[0].outerHTML;
                alert(htmlNewsletter);
            }
            
            function removeFromArr(id){
                htmlArray = $.grep(htmlArray, function(e){ 
                    return e.id != id; 
                });
            }
            
            function edit(id){
                var element = $.grep(htmlArray, function(e){ 
                    return e.id == id; 
                });
                
                for (var key in element) {
                    var obj = element[key];
                    currentElement = obj;
                    obj.displayForm();
                    
                }
                                
                
            }
            
            function safeEditData(){
                    editData = document.getElementsByClassName("editInput");
                    console.log(editData);
                    $('#editForm')[0].reset();
                    //$('#editForm').outerHTML('<form id="editForm" onsubmit="event.preventDefault();"><div class="editContainer"><div class="box"></div> </div> </form> ');
                }

