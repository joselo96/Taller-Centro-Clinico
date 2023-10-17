var boton_subir_medico=document.getElementById("subir_m")
var boton_subir_paciente=document.getElementById("subir_p")

//Registro de medicos 

class Medicos{
    constructor(nombre,apellido,Ncedula,consultorio,telefono,correo,especialidad){
    this.nombre=nombre
    this.apellido=apellido
    this.Ncedula=Ncedula
    this.especialidad=especialidad
    this.consultorio=consultorio
    this.correo=correo
    this.telefono=telefono
    }
}

let NombreMedico=document.getElementById("nombre_medico")
let ApellidoMedico=document.getElementById("apellido_medico") 
let CedulaMedico=document.getElementById("Ncedula_medico")
let Consultorio=document.getElementById("consultorio")
let TelefonoMedico=document.getElementById("Ntelefono_medic")
let Email=document.getElementById("email")
let EspecialidadMedico=document.getElementById("especialidad_medico")


boton_subir_medico.addEventListener("click", function(){
    let ValorNombre=NombreMedico.value
    let ValorApellido=ApellidoMedico.value 
    let ValorCedula=CedulaMedico.value
    let ValorConsultorio=Consultorio.value
    let ValorTelefono=TelefonoPaciente.value
    let ValorCorreo=correo.value
    let ValorEspecialidad=Especialidad.value

    const paciente = new Medicos(ValorNombre,ValorApellido,ValorCedula,ValorConsultorio,ValorTelefono,ValorCorreo,ValorEspecialidad)
    let registro=[]

    let LocalRegistros= localStorage.getItem("Pacientes")
    if(LocalRegistros){
        registro = JSON.parse(LocalRegistros)
    }
    registro.push(paciente)
    
    localStorage.setItem("Pacientes", JSON.stringify(registro))
    alert("Medico registrado")
    
    }
)

// registro de pacientes 

class Pacientes{
    constructor(nombre,apellido,Ncedula,Edad,telefono,especialidad){
    this.nombre=nombre
    this.apellido=apellido
    this.Ncedula=Ncedula
    this.Edad=Edad
    this.telefono=telefono
    this.Especialidad=especialidad
    }
}

let NombrePaciente=document.getElementById("nombre_paciente")
let ApellidoPaciente=document.getElementById("apellido_paciente") 
let CedulaPaciente=document.getElementById("Ncedula_paciente")
let EdadPaciente=document.getElementById("edad_paciente")
let TelefonoPaciente=document.getElementById("Ntelefono_paciente")
let EspecialidadPaciente=document.getElementById("Especialidad_paciente")


boton_subir_paciente.addEventListener("click", function(){

    let ValorNombre=NombrePaciente.value
    let ValorApellido=ApellidoPaciente.value 
    let ValorCedulapaciente=CedulaPaciente.value
    let ValorEdadPaciente=EdadPaciente.value
    let ValorTelefonoPaciente=TelefonoPaciente.value
    let ValorEspecialidadPaciente=EspecialidadPaciente.value

    const paciente = new Pacientes(ValorNombre,ValorApellido,ValorCedulapaciente,ValorEdadPaciente,ValorTelefonoPaciente,ValorEspecialidadPaciente)
    let registro=[]

    let LocalRegistros= localStorage.getItem("Pacientes")
    if(LocalRegistros){
        registro = JSON.parse(LocalRegistros)
    }
    registro.push(paciente)
    console.log("exito")
    localStorage.setItem("Pacientes", JSON.stringify(registro))
    alert("Paciente registrado")
    
    }
)
