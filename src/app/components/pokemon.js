"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./pokemon.module.css";

function Pokemon() {
    const [poke, setPoke] = useState("/vercel.svg");
    const [id, setId] = useState("ID");
    const [name, setName] = useState("Nombre");
    const [tipo, setTipo] = useState("Tipo");
    const [altura, setAltura] = useState("Altura");
    const [peso, setPeso] = useState("Peso");
    const [habilidad1, setHabilidad1] = useState("Habilidad");
    const [habilidad2, setHabilidad2] = useState("Habilidad");
    const [hp, setHp] = useState("HP");
    const [atacar, setAtacar] = useState("Atacar");
    const [defensa, setDefensa] = useState("Defensa");
    const [velocidad, setVelocidad] = useState("Velocidad");
    const url = "https://pokeapi.co/api/v2/pokemon/210";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPoke(data.sprites.front_default),
                    setId(data.id),
                    setName(data.name),
                    setTipo(data.types[0].type.name),
                    setAltura(data.height),
                    setPeso(data.weight),
                    setHabilidad1(data.abilities[0].ability.name),
                    setHabilidad2(data.abilities[1].ability.name),
                    setHp(data.stats[0].base_stat),
                    setAtacar(data.stats[1].base_stat),
                    setDefensa(data.stats[2].base_stat),
                    setVelocidad(data.stats[5].base_stat)
            });
    }, [])
    return (
        <div className={style.container}>
            <div className={style.div}>
                <div className={style["text-pokemon"]}>My Pokemon</div>
                <div className={style["grupo-datos"]}>
                    <div className={style["text-1"]}>{name.charAt(0).toUpperCase()}{name.slice(1)}</div>
                    <div className={style["text-2"]}>#{id}</div>
                    <Image src={poke} alt="pokemon" width={350} height={350} />
                </div>
                <div className={style["grupo-datos"]}>
                    <div className={style["text-3"]}>About</div>
                    <div className={style["text-5"]}>Type</div>
                    <div className={style["text-6"]}>{tipo}</div>
                    <div className={style["text-13"]}>Height</div>
                    <div className={style["text-7"]}>{altura} m</div>
                    <div className={style["text-14"]}>Weight</div>
                    <div className={style["text-8"]}>{peso} kg</div>
                    <div className={style["text-15"]}>Abilities</div>
                    <div className={style["text-9"]}>{habilidad1}, {habilidad2}</div>
                    <img className={style.vector} alt="Vector" src="Vector.svg" />
                </div>
                <div className={style["grupo-datos"]}>
                    <div className={style["text-4"]}>Stats</div>
                    <div className={style["text-16"]}>HP</div>
                    <div className={style["text-10"]}>{hp}</div>
                    <div className={style["text-17"]}>Attack</div>
                    <div className={style["text-11"]}>{atacar}</div>
                    <div className={style["text-18"]}>Defense</div>
                    <div className={style["text-12"]}>{defensa}</div>
                    <div className={style["text-20"]}>Speed</div>
                    <div className={style["text-19"]}>{velocidad}</div>
                </div>
            </div>
        </div>
    );
}
export default Pokemon;