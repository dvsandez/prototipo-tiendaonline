<form class="col-md-8" action="{{ route('addProduct') }}" method="POST" enctype="multipart/form-data">
    @csrf
        <h2>Añadir producto</h2>
        <div class="form-gruop">
            <label for="name_product">Nombre del producto:
                <input class="form-control" type="text" name="name" id="name_product" class="form-control">
            </label>
        </div>

        <div class="form-gruop">
            <label for="trademark_product">Marca:
                <input class="form-control" type="text" name="trademark" id="trademark_product" class="form-control">
            </label>
        </div>

        <div class="form-gruop">
            <label for="price_product">Precio:
                <input class="form-control" type="number" name="price" id="price_product" class="form-control">
            </label>
        </div>

        <div class="form-gruop">
            <label for="quantity_product">Cantidad:
                <input class="form-control" type="number" name="quantity" id="quantity_product" class="form-control">
            </label>
        </div>

        <div class="form-gruop">
            <label for="unit_of_measurement_product">Medida:
                <select name="unit_of_measurement" id="unit_of_measurement_product">
                    <option value="gr."> Gramos </option>
                    <option value="kl."> Kilos </option>
                    <option value="lt."> Litros </option>
                </select>
            </label>
        </div>


        <input class="btn btn-primary" type="submit" value="Enviar">

    </form>
