const navbarContainer = document.getElementById('navbar-container');

navbarContainer.classList = 'flex justify-between items-center py-2 md:py-11 border-b-2';
navbarContainer.innerHTML = `

                        <div>
                            <img src="./images/Logo.png" alt="" class="md:w-full w-3/4">
                        </div>

                        <div>
                            <button class="btn bg-gray-300 text-xs md:text-base font-medium md:px-4 md:py-2">Sort by view</button>
                        </div>

                        <div>
                            <button class="btn bg-[#FF1F3D] text-xs md:text-base font-medium md:px-4 md:py-2 text-white"
                            onclick="blog_btn.showModal()">Blog</button>
                            <dialog id="blog_btn" class="modal modal-bottom sm:modal-middle">
                                <form method="dialog" class="modal-box">
                                    <ul class="list-disc">
                                        <li class="mb-3"><span class="font-bold">the scope of var, let, and const:</span>
                                            <p>
                                            <ul>
                                                <li>
                                                    var: A variable declared with var is either global or function scoped, depending on
                                                    where it
                                                    is declared. It can be redeclared and reassigned in the same scope. It is also hoisted,
                                                    which means it can be accessed before it is declared, but its value will be undefined
                                                    until
                                                    it is initialized.
                                                </li>
                    
                                                <li>
                                                    let: A variable declared with let is block scoped, which means it can only be accessed
                                                    within the block where it is declared or by other blocks nested inside it. It can be
                                                    reassigned but not redeclared in the same scope. It is not hoisted, which means it
                                                    cannot be
                                                    accessed before it is declared, otherwise it will throw a ReferenceError.
                                                </li>
                    
                                                <li>
                                                    const: A variable declared with const is also block scoped, but it cannot be reassigned
                                                    or
                                                    redeclared in the same scope. It is not hoisted either, and it must be initialized with
                                                    a
                                                    value when it is declared.
                                                </li>
                                            </ul>
                                            </p>
                                        </li>
                    
                                        <li class="mb-3"><span class="font-bold">Use cases of null and undefined:</span>
                                            <p>
                                            <ul>
                                                <li>
                                                    Checking for the existence or validity of a value. You can use the == operator to
                                                    compare a
                                                    value with null or undefined, and it will return true if the value is either null or
                                                    undefined. For example, if (x == null) will check if x is null or undefined, and execute
                                                    some code if it is. However, if you want to check for a specific value, you should use
                                                    the
                                                    === operator, which does not perform type conversion. For example, if (x === null) will
                                                    check if x is strictly null, and not undefined.
                                                </li>
                    
                                                <li>
                                                    Providing default values for parameters or variables. You can use the logical OR
                                                    operator
                                                    (||) to assign a default value to a parameter or variable if it is null or undefined.
                                                    For
                                                    example, function greet(name) { name = name || 'Anonymous'; console.log('Hello, ' +
                                                    name); }
                                                    will assign the string ‘Anonymous’ to the parameter name if it is null or undefined, and
                                                    then print a greeting message.
                                                </li>
                    
                                                <li>
                                                    Removing properties from an object. You can assign null to a property of an object to
                                                    remove
                                                    its value, but not its key. For example, let person = {name: 'Alice', age: 25};
                                                    person.age =
                                                    null; console.log(person); // {name: 'Alice', age: null} will remove the value of the
                                                    age
                                                    property, but not delete the property itself. If you want to delete the property
                                                    entirely,
                                                    you can use the delete operator. For example, delete person.age; console.log(person); //
                                                    {name: 'Alice'} will delete both the value and the key of the age property.
                                                </li>
                                            </ul>
                                            </p>
                                        </li>
                                        <li class="mb-3"><span class="font-bold">REST API:</span>
                                            <p>
                                                A REST API is an application programming interface that follows the principles of REST, or
                                                representational state transfer, an architectural style for designing web services. A REST
                                                API
                                                allows different applications or devices to communicate with each other over the internet by
                                                using standard methods and formats. A REST API consists of two main components: resources
                                                and
                                                operations. Resources are the data or information that the API provides or manipulates, such
                                                as
                                                users, products, orders, etc. Operations are the actions that the API can perform on the
                                                resources, such as creating, reading, updating, or deleting them. A REST API uses HTTP
                                                methods
                                                (such as GET, POST, PUT, or DELETE) to represent the operations, and URIs (uniform resource
                                                identifiers) to identify the resources. A REST API also supports different formats for
                                                exchanging data, such as JSON (JavaScript Object Notation), XML (Extensible Markup
                                                Language), or
                                                plain text.
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="modal-action">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn btn-primary">Close</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
            `
