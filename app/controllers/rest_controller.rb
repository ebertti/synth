class RestController < ApplicationController

  def index
    #cleaning extra parameters
    params.delete(:controller)
    params.delete(:action)

    index_id = params.delete(:s)
    if index_id.nil?
      index_id = 'http://index'
    end
      unless index_id.nil?
      index = SHDM::Index.find(index_id) unless index_id.nil?
      index = index.nil? ? SHDM::Index.find_all.first : index

      new_params = {}
      params.each{ |i,v| new_params[i] = v.is_a?(Hash) ? RDFS::Resource.new(v["resource"]) : v }
      new_params.delete('authenticity_token')

      index = index.new(new_params)
      result = ( params[:node].nil? ? index : index.entry(RDFS::Resource.new(params[:node])) ).serialize
    else
      result = {}
    end
    respond_to do |format|
      format.json  { render :json => result }
      format.text { render :text => result.inspect }
      #format.xml  { render :xml => result }
    end
  end


  def context
    params.delete(:controller)
    params.delete(:action)

    context_id = params.delete(:s)

    unless context_id.nil?
      node_id    = params.delete(:node)
      context    =  SHDM::Context.find(context_id)

      new_params = {}
      params.each{ |i,v| new_params[i] = v.is_a?(Hash) ? RDFS::Resource.new(v["resource"]) : v }
      new_params.delete('authenticity_token')

      context   = context.new(new_params)
      result = ( node_id.nil? ? context : context.node(RDFS::Resource.new(node_id)) ).serialize
    else
      result = {}
    end
    respond_to do |format|
      format.json  { render :json => result }
      format.text { render :text => result.inspect }
      #format.xml  { render :xml => result }
    end
  end

  def resource
    resource_id = params.delete(:s)
    resource    = resource_id.nil? ? {} : SHDM::Resource.new(resource_id)
    respond_to do |format|
      format.json  { render :json => resource.serialize }
      format.text { render :text => resource.inspect }
      #format.xml  { render :xml => result }
    end
  end

  def node
    resource_id = params.delete(:r)
    context_id = params.delete(:c)
    context    = SHDM::Context.find(context_id)
    context   = context.new(context_id)

    current_node = NodeDecorator.new(RDFS::Resource.new(resource_id), context)
    current_node ||= context.nodes.first
    resource    = resource_id.nil? ? {} : current_node
    respond_to do |format|
      format.json  { render :json => resource.serialize }
      format.text { render :text => resource.inspect }
      #format.xml  { render :xml => result }
    end
  end

  def landmark
    results = SHDM::Landmark.all
    respond_to do |format|
      format.json  { render :json => results.serialize }
      format.text { render :text => results.inspect }
    end
  end

end
