/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.airhacks;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 *
 * @author Wei Engelbrecht
 */
@Path("dukes")
@Produces("application/json")
public class DukesResource {
    @GET
    public JsonArray dukes(){
        int a=9;
        int b=3*a;
        JsonArray myarray=Json.createArrayBuilder().add(duke("smart",18))
                .add(duke("nice",42)).build();
        
        return Json.createArrayBuilder().add(duke("smart",18))
                .add(duke("nice",42)).build();
    }
    public JsonObject duke(String name, int age) {
        return Json.createObjectBuilder().add("name",name)
                .add("age",age).build();
    }
}
