<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $product)
            <tr>
                <td>{{ $loop->iteration}}</td>
                <td>{{$pruduct->name}}</td>
                <td>{{$pruduct->trademark}}</td>
                <td>{{$pruduct->price}}</td>
                <td>{{$pruduct->quatity." ". $product->unit_of_measurement}}</td>
                <td>{{$pruduct->stock}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
