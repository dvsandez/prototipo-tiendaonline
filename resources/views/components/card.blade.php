
    <!--<div class="row">-->
        <div {{$attributes->merge(["class"=>"col-md-4"])}}>
            <div class="card">
                <div class="card-header"> {{ $title }} </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                            {{ $slot }}
                </div>
            </div>
        </div>
    <!-- </div> -->
    <!-- Happiness is not something readymade. It comes from your own actions. - Dalai Lama -->

