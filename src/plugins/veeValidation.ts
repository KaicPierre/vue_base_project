import {
    ValidationProvider,
    extend,
    ValidationObserver,
    setInteractionMode,
} from "vee-validate";
import { required, confirmed, numeric } from 'vee-validate/dist/rules';


setInteractionMode("eager");

extend('numeric', {
    ...numeric,
    message: "Apenas números",
});

extend('required', {
    ...required,
    message: 'Esse campo é obrigatório'
});


extend('confirmed', {
    ...confirmed,
    message: 'As senhas não correspondem'
});

extend('min', value => {
    if (value.length < 8) {
        return 'Mínimo de 8 caracteres'
    }
    return true
});

export { ValidationProvider, ValidationObserver };
